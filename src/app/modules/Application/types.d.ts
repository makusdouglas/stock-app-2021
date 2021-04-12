export type AppState = {
    factory: Factory[];
    showWelcomeToast: boolean;
}

type Factory = {
    codigo: number,
    descricao: string
}

export type ResponseFactoryRequest = {
    data: Factory[],
}