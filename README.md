# Ana Durães — Estética Avançada

Site de apresentação de estética avançada com estética **marfim, branco e dourado champanhe**, pensado para uma experiência feminina, minimalista, acolhedora e responsiva.

## Estrutura

- \`index.html\` — página principal, SEO base, secções, FAQ e formulário de preparação de mensagens.
- \`styles.css\` — identidade visual, layout, animações suaves e adaptação mobile.
- \`script.js\` — menu mobile, animações, seleção de tratamento e mensagem copiável.
- \`assets/ana-duraes.webp\` — retrato enviado para o projeto.
- \`favicon.svg\` — ícone com monograma.

Não precisa de compilação ou dependências JavaScript. Pode ser publicado em GitHub Pages a partir da raiz da branch \`main\`. As fontes Google têm fallback local.

## Personalização antes de publicar

1. **Confirmar a oferta real:** os seis cartões são **áreas ilustrativas**, não uma declaração de tratamentos já disponibilizados pela clínica. Rever e remover o que não corresponder à atividade.
2. **Confirmar habilitações e equipa:** Ana Durães é apresentada apenas como *licenciada em Biomedicina pela CESPU*, com base na informação fornecida. Não se atribuem profissões regulamentadas, especialidades médicas ou títulos não confirmados.
3. **Procedimentos injetáveis:** em Portugal, a ERS esclarece que a aplicação de toxina botulínica e preenchimentos faciais com ácido hialurónico são atos de profissionais médicos ou médicos dentistas habilitados e inscritos nas respetivas ordens. Confirmar profissional, enquadramento e licença/registos aplicáveis antes de publicitar/agendar. Ver https://www.ers.pt/pt/utentes/publicacoes/selecionar/notas-informativas/notas-informativas/nota-informativa-n-%C2%BA-2-2025-interven%C3%A7%C3%A3o-da-ers-nos-cuidados-de-sa%C3%BAde-ligados-%C3%A0-est%C3%A9tica/
4. **Dados legais:** incluir entidade responsável, morada e identificação e registos ERS/licença aplicáveis, bem como a identificação profissional regulamentada, de acordo com o contexto real, antes de publicação comercial.
5. **Contactos e agendamentos:** faltam telefone, WhatsApp, Instagram, email, morada e/ou plataforma de reservas confirmados. O formulário atual **não recolhe dados num servidor**, não simula envio de pedidos e oferece somente a opção de copiar uma mensagem.
6. **Política de privacidade:** definir política e responsável pelo tratamento de dados se forem acrescentados formulários com submissão, cookies analíticos ou ferramentas de marketing.
7. **Imagem:** confirmar autorização para uso público da fotografia.

## Alterar conteúdos

Os textos das áreas de cuidado e as perguntas frequentes estão em \`index.html\`. As cores estão nas variáveis do início de \`styles.css\`. O formulário funciona no navegador, não envia informação a qualquer servidor.

## Publicação

Em **Settings → Pages → Build and deployment**, selecionar **Deploy from a branch**, branch \`main\` e pasta \`/ (root)\`. Após a publicação poderá ficar acessível em \`https://bpsbeast.github.io/adc/\`, caso o GitHub Pages seja ativado para este repositório.


## Novas fotografias da Ana

Foi criada uma secção editorial **Formação**, que destaca a Licenciatura em Biomedicina na CESPU. A imagem com o diploma será exibida automaticamente quando existir `assets/ana-diploma.webp`; até lá é apresentado um painel tipográfico sem fotografia inventada.

O retrato do topo mudará automaticamente para `assets/ana-natural.webp` quando esse ficheiro existir. Se não existir, continua a aparecer a fotografia `ana-duraes.webp` para evitar imagens partidas.

**Atenção:** as duas novas fotografias enviadas na conversa como imagens incorporadas não estavam disponíveis como ficheiros acessíveis no ambiente de publicação; por isso não foram ainda copiadas para o repositório. Para concluir a integração, devem ser anexadas como ficheiros JPG/PNG originais (ou adicionadas com os nomes indicados) e convertidas para WebP.
