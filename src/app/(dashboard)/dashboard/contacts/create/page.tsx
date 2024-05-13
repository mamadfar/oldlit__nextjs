'use client'

import React, {FC} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {ICreateContact} from "@/types/Contact.type";
import {useMutation} from "@tanstack/react-query";
import {CreateContactService} from "@/services/Contact.service";

const CreateContact: FC = () => {

    const {mutate: createContactMutate} = useMutation({mutationKey: ['createContact'], mutationFn: async (payload: ICreateContact) => {
            const {data} = await CreateContactService(payload);
            return data;
        }});

    const onFinish = (values: ICreateContact) => {
        console.log('Success:', values);
        createContactMutate(values);
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-md">
                <p className="text-2xl mb-3">Create Contact</p>
                <Form
                    name="create-contact"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="p-4 border rounded-md shadow-lg"
                >
                    <Form.Item
                        name="phoneNumber"
                        rules={[{required: true, message: 'Please input the phone number!'}]}
                    >
                        <Input placeholder="Phone Number"/>
                    </Form.Item>

                    <Form.Item
                        name="isDeliverable"
                        valuePropName="checked"
                    >
                        <Checkbox>Is Deliverable</Checkbox>
                    </Form.Item>

                    <Form.Item
                        name="notes"
                    >
                        <Input.TextArea placeholder="Notes"/>
                    </Form.Item>

                    <Form.Item
                        name="fromAddress"
                        rules={[{required: true, message: 'Please input the from address!'}]}
                    >
                        <Input placeholder="From Address"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Contact
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default CreateContact;