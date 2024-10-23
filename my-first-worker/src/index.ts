
export default {
	async fetch(request, env, ctx): Promise<Response> {
		
		return Response.json({
			msg:"hi there"
		});
	},
} satisfies ExportedHandler<Env>;
