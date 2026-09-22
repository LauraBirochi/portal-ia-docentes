/**
 * Módulo 1 – Atividades Práticas de Laboratório, Portfólio Digital & Gabaritos
 * Portal de Apoio Docente: Inteligência Artificial: Fundamentos e Boas Práticas (32h)
 */

export const oficinaPratica = {
  titulo: "Atividade 1: Raio-X da IA no Cotidiano & Mapeamento de Dados",
  duracao: "40 minutos em Laboratório",
  peso: "0,5 ponto no Portfólio Digital",
  ferramenta: "Portfólio Digital Individual + Navegador Web",
  descricao: "Oficina prática em computadores onde cada estudante escolhe dois aplicativos do seu cotidiano (ex: Waze, Spotify, Nubank, Netflix, Câmera/Google Fotos) e disseca a cadeia: Dados Coletados ➔ Padrão que a IA Calcula ➔ Benefício Entregue ao Usuário, finalizando com reflexão crítica sobre a vida sem essa automação.",
  casosGabarito: [
    {
      caso: "Exemplo 1: Waze / Google Maps (Navegação & Trânsito)",
      categoria: "Geolocalização & Previsão",
      entradas: "Localização GPS em tempo real de milhares de motoristas, velocidade de deslocamento e alertas de acidentes enviados pela comunidade.",
      oQueIaFaz: "Calcula a velocidade média dos trechos a cada segundo, identifica padrões de lentidão/gargalos e simula milhares de rotas alternativas em milissegundos.",
      saida: "Tempo estimado de chegada (ETA) hiperpreciso e desvio de rota sugerido antes do motorista travar no engarrafamento.",
      contraprova: "Programação fixa manual exigiria que um humano ligasse para cada rua para saber a situação. A IA aprende o trânsito a partir dos dados contínuos de milhares de celulares."
    },
    {
      caso: "Exemplo 2: Spotify / Netflix / YouTube (Sistemas de Recomendação)",
      categoria: "Filtragem Colaborativa & Mídia",
      entradas: "Histórico de reprodução, músicas puladas nos primeiros 30s, horário em que ouve e playlists salvas.",
      oQueIaFaz: "Compara o perfil de escuta do usuário com milhões de outros ouvintes com gostos semelhantes (filtragem colaborativa) e calcula a probabilidade estatística de afinidade com faixas inéditas.",
      saida: "Playlist 'Descobertas da Semana' ou fila de reprodução contínua que mantém o ouvinte engajado.",
      contraprova: "Um funcionário humano jamais conseguiria fazer a curadoria musical manual diária para 500 milhões de usuários."
    },
    {
      caso: "Exemplo 3: Antifraude Bancária (Pix / Cartão de Crédito Nubank, BB, Itaú)",
      categoria: "Classificação Anômala & Segurança",
      entradas: "Valor da transação, horário, localização habitual do usuário, tipo de estabelecimento e dispositivo usado.",
      oQueIaFaz: "Calcula em menos de 300 milissegundos o score de risco: quão distante essa compra está do padrão de comportamento histórico daquela pessoa.",
      saida: "Aprovação instantânea ou bloqueio preventivo com aviso no app.",
      contraprova: "Regras manuais rígidas (ex: 'bloquear compras acima de R$ 500') bloqueariam compras legítimas de quem viaja e deixariam passar fraudes pequenas de R$ 50."
    }
  ],
  planoB: "Caso a conexão de internet do laboratório oscile, Laura & Maria conduzirão a oficina em formato impresso/caderno físico, preenchendo a tabela do Raio-X em duplas e transferindo para o arquivo digital na aula seguinte."
};
