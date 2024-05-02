import { getServerSession } from "next-auth";
import { authOptions } from "../libs/options";


export default async function getSession() {
  return await getServerSession(authOptions);
}