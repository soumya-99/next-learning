import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id > 10) {
        return NextResponse.json({ error: "User not found!" }, { status: 404 })
    }
    return NextResponse.json({ id: id, name: "Soumya" }, { status: 200 })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    if (!body.name) {
        return NextResponse.json({ error: "Name is required." }, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}