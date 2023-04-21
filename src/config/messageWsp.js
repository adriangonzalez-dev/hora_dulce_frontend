export const createMessageForWsp = (message) => {
    const messageWsp = message.replace(/ /g, '%20');
    return messageWsp;
};