"use server"

import prisma from "../../prisma/prisma-client";

export async function createUser () {
    const newUser = await prisma.user.create({
        data: {
            firstname: 'Riry',
            lastname: "Nomenjanahary",
            email: 'rirynomenjanahary@gmail.com',
            image: ""
        },
    });

    return prisma.user.findMany();
}
