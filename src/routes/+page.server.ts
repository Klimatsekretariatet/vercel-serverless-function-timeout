import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	callFunction: async () => {
		await new Promise((resolve) => setTimeout(resolve, 20000));
		return {
			message: 'Function executed!'
		};
	}
};
