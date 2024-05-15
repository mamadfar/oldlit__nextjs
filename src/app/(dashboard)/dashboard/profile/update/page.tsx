'use client'

import {GetUserService, UpdateUserService} from "@/services/User.service";
import {IUpdateUser} from "@/types/User.type";
import {useMutation, useQuery} from "@tanstack/react-query";
import {Button, Form, Input, message} from "antd";
import React from "react";

const Profile = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const {data: user} = useQuery({queryKey: ['getUser'], queryFn: async () => {
            const {data} = await GetUserService();
            form.setFieldValue('firstName', data.firstName);
            form.setFieldValue('lastName', data.lastName);
            return data;
        }});

    const {mutate: updateMutate, isPending: isUpdateUserPending} = useMutation({mutationKey: ['updateUser'], mutationFn: async (payload: IUpdateUser) => {
            const {data, status} = await UpdateUserService(payload);
            if (status === 200) {
                messageApi.success({
                    content: 'Update Success',
                    duration: 2,
                    key: 'updatable',
                });
            }
            return data;
        }})


    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        updateMutate(values)
    };

    return (
        <div className="flex justify-center items-center h-full">
            {contextHolder}
            {user && (
                <div className="w-full max-w-md">
                    <p className="text-2xl mb-3">Update Profile</p>
                    <Form
                        form={form}
                        name="create-book"
                        onFinish={onFinish}
                        autoComplete="off"
                        className="p-4 border rounded-md shadow-lg"
                    >
                        <Form.Item
                            rules={[{required: true, message: 'Please input the book name!'}]}
                        >
                            <Input placeholder="Email" disabled defaultValue={user.email}/>
                        </Form.Item>
                        <Form.Item
                            name="firstName"
                            rules={[{required: true, message: 'Please input the firstname!'}]}
                        >
                            <Input placeholder="First Name" value={form.getFieldValue('firstName')}/>
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[{required: true, message: 'Please input the lastname!'}]}
                        >
                            <Input placeholder="Last Name" value={form.getFieldValue('lastName')}/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit"
                                    disabled={isUpdateUserPending}
                                    className={`w-full ${isUpdateUserPending ? 'cursor-not-allowed' : ''}`}>
                                Update Profile
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default Profile;

