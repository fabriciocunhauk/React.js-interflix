import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (objetoDoVideo) => {

    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();

                return resposta
            }
            throw new Error('Nao foi possivel cadastrar os dados')
        });
}


export default {
    create,
}