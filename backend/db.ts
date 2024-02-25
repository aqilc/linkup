import { createClient } from "@supabase/supabase-js";
import { readFileSync as read } from "fs";
import { Database } from "./supabase";

/* @ts-ignore */
export const env: {
	supabase_url: string;
	supabase_key: string;
} = {};
read(".env").toString().split("\n").map(s => s.split("="))
	.forEach(entry => entry[0] && entry[0][0] !== "#" && (env[entry[0].toLowerCase()] = entry[1]));

console.log(env);


export const supabase = createClient<Database>(env.supabase_url, env.supabase_key);