'use client'

import React, {FC} from 'react';
import {Form, Input, Button, Upload, Select, message} from 'antd';
import {AiOutlineCloudUpload} from "react-icons/ai";
import {useMutation, useQuery} from "@tanstack/react-query";
import {GetContactsService} from "@/services/Contact.service";
import {ICreateBook} from "@/types/Book.type";
import {CreateBookImageTempService, CreateBookService} from "@/services/Book.service";
import {CategoriesService} from "@/services/Category.service";

const {Option} = Select;

const CreateBook: FC = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [form] = Form.useForm();
    const {mutate: contactMutate, isPending: isContactsPending, data: contacts} = useMutation({
        mutationKey: ['contacts'], mutationFn: async () => {
            const {data} = await GetContactsService();
            return data
        }
    });
    const {mutate: createBookMutate, isPending: isCreateBookPending, isSuccess: isCreateBookSuccess} = useMutation({
        mutationKey: ['createBook'], mutationFn: async (payload: ICreateBook) => {
            messageApi.open({
                key: 'updatable',
                type: 'loading',
                content: 'Loading...',
            });
            const {data, status} = await CreateBookService(payload);
            if (status === 200) {
                messageApi.success({
                    content: 'Book Created',
                    duration: 2,
                    key: 'updatable',
                });
                form.resetFields();
            }
            return data
        }
    });

    const {mutate: createBookImageTempMutate, isPending: isCreateBookImageTempPending} = useMutation({
        mutationKey: ['createBookImageTemp'], mutationFn: async (payload: any) => {
            messageApi.open({
                key: 'updatable',
                type: 'loading',
                content: 'Loading...',
            });
            const formData = new FormData();
            formData.append('images', payload.file);
            const {data, status} = await CreateBookImageTempService(formData);
            if (status === 200) {
                messageApi.success({
                    content: 'Image Uploaded',
                    duration: 2,
                    key: 'updatable',
                });
            }
            return data
        }
    });

    const {mutate: categoriesMutate, data: categoriesData, isPending: isCategoriesPending} = useMutation({mutationKey: ['categories'], mutationFn: CategoriesService})

    const onFinish = (values: ICreateBook) => {
        console.log('Received values of form: ', values);
        console.log('Received values of form: ', values.images)
        // @ts-ignore
        values.images = values.images.fileList.map(image => image.name)
        createBookMutate(values);
    };

    return (
        <div className="flex justify-center items-center h-full">
            {contextHolder}
            <div className="w-full max-w-md">
            <p className="text-2xl mb-3">Create Book</p>
                <Form
                    form={form}
                    name="create-book"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="p-4 border rounded-md shadow-lg"
                >
                    <Form.Item
                        name="name"
                        rules={[{required: true, message: 'Please input the book name!'}]}
                    >
                        <Input placeholder="Book Name"/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{required: true, message: 'Please input the book description!'}]}
                    >
                        <Input.TextArea placeholder="Book Description"/>
                    </Form.Item>
                    <Form.Item
                        name="price"
                        rules={[{required: true, message: 'Please input the book price!'}]}
                    >
                        <Input placeholder="Book Price"/>
                    </Form.Item>
                    <Form.Item
                        name="contactId"
                        rules={[{required: true, message: 'Please input the contact ID!'}]}
                    >
                        <Select
                            placeholder="Select Contact ID"
                            onFocus={() => contactMutate()}
                            loading={isContactsPending}
                        >
                            {contacts?.contacts.map((contact) => (
                                <Option key={contact.id} value={contact.id}>
                                    <div className="flex justify-between">
                                        <span
                                            className="truncate">{contact.fromAddress}</span><small>ID: {contact.id}</small>
                                    </div>
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="categoryNames"
                        rules={[{required: true, message: 'Please select at least one category!'}]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Select Categories"
                            onFocus={() => categoriesMutate()}
                            loading={isCategoriesPending}
                        >
                            {categoriesData?.data.categories.map((category) => (
                                <Option key={category.id} value={category.name}>{category.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="images">
                        <Upload listType="picture" multiple onChange={createBookImageTempMutate}
                                beforeUpload={() => false}>
                            <Button icon={<AiOutlineCloudUpload/>}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit"
                                disabled={isCreateBookImageTempPending || isCreateBookPending || isContactsPending}
                                className={`w-full ${(isCreateBookImageTempPending || isCreateBookPending || isContactsPending) ? 'cursor-not-allowed' : ''}`}>
                            Create Book
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default CreateBook;