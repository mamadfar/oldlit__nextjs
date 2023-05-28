import {BOOKS_DATA} from "@/utils/db.util";

export async function GET(req: Request, res: Response) {
    const body = JSON.stringify({results: [...BOOKS_DATA]});
    return new Response(body, {
        status: 200
    })
}