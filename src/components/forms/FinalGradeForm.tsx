"use client"
import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
const FinalGradeForm = () => {
    const [finalGrade, setFinalGrade] = useState(0)
    const form = useForm({
        defaultValues: {
            currentGrade: "",
            finalWeight: "",
            desiredGrade: "",
        }
    })
    
    const handleSubmit = (data: any) => {
        const currentGrade = parseFloat(data.currentGrade)
        const finalWeight = parseFloat(data.finalWeight)
        const desiredGrade = parseFloat(data.desiredGrade)
        const finalGrade = (desiredGrade - (1 - finalWeight / 100) * currentGrade) / (finalWeight / 100)
        console.log(data)
        console.log(finalGrade)
        setFinalGrade(finalGrade);
    }
   
  return (
    <div>
        <h1 className='text-2xl font-bold' >Calculate your final grade</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="currentGrade"
                render = {({ field }) => (
                        <FormItem>
                            <FormLabel >Current Grade</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>

                )}
                
                />

<FormField
                control={form.control}
                name="finalWeight"
                render = {({ field }) => (
                        <FormItem>
                            <FormLabel >Final Exam weight</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>

                )}
                
                />
                <FormField
                control={form.control}
                name="desiredGrade"
                render = {({ field }) => (
                        <FormItem>
                            <FormLabel >Target Grade</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>

                )}
                
                />
                <Button type='submit'>Calculate</Button>
            </form>
        </Form>
        <h2>You would need to get a grade of {finalGrade} %</h2>
    </div>
  )
}

export default FinalGradeForm