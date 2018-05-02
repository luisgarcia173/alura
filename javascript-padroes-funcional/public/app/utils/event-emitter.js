// Mapa de eventos
const events  = new Map();

// Criar mecanismo para notificar todos os listeners que deram subscribe no evento
export const EventEmitter = {

	// Add listener ao evento
    on(event, listener) {
        if (!events.has(event)) events.set(event, []);
        events.get(event).push(listener);
    },

	// Emite evento caso haja listeners
    emit(event, data) {
		const listeners = events.get(event);
        if (listeners) listeners
            .forEach(listener => listener(data));
    }
};