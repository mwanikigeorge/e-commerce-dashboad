'use-client'
import {useModalStore} from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {

    const [Loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        }
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        //todo: create store
        try {
            setLoading(true);
            const response = await axios.post('/api/stores', data);

            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }

    }

    const storeModel = useModalStore();
    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={storeModel.isOpen}
            onClose={storeModel.onClose}
        >
            <div>
            <div className="space-y-4 py-2 pb-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                        control={form.control}
                        name="name"
                        render={({field}) => (
                        <FormItem>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormControl>
                                <Input {...field} id="name" placeholder="Store name" />
                            </FormControl>
                            <FormMessage/>  
                        </FormItem>  
                        
                        )}
                        />
<div className="pt-6 space-x-2 flex item-center justify-end ">
                            <Button disabled={Loading} variant={"outline"} type="button" onClick={storeModel.onClose}>Cancel</Button>
                            <Button disabled={Loading} type="submit">Continue</Button>
</div>
                    </form>
                </Form>
            </div></div>
        </Modal>
    )
}