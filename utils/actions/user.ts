'use server'

import { auth } from "@clerk/nextjs/server"
import prisma from "../db"
import { redirect } from "next/navigation"

export const getCurrentUserId = async () => {
    const { userId } = await auth()
    if (!userId) redirect('/')///////////////////////////////////////////
    return userId
}

export const getUserDetailsAction = async () => {
    const id=await getCurrentUserId()
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}