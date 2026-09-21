# Ajustar apoio, rodapé e recebimento por e-mail

## Resultado
- Trocar o fundo da coluna da arte oficial de azul para o mesmo marfim/bege usado no restante do site, sem alterar a imagem nem seu enquadramento.
- Atualizar o rodapé com o texto legal completo: “Eleições 2026 Nara Lucia de Paula Fan Deputado Estadual | CNPJ: 68.438.182/0001-10 | FEDERAÇÃO PSOL-REDE”.
- Adicionar links visíveis e acessíveis para Instagram e Threads, abrindo em nova aba.
- Fazer o formulário “Eu apoio a Nara” enviar cada cadastro individualmente para `professoranarafan@gmail.com`.

## Fluxo do formulário
1. A pessoa preenche nome, WhatsApp e consentimento.
2. O envio é validado no servidor e dispara um e-mail fixo para o endereço da campanha.
3. O botão mostra estados de envio, sucesso e erro, evitando envios repetidos.
4. Nenhum cadastro será salvo em banco ou planilha; o e-mail será o único destino.

## Pré-requisito de e-mail
O projeto ainda não possui um domínio de envio configurado. Após a aprovação do plano, será necessário configurar um domínio próprio da campanha; então criarei o modelo do aviso e conectarei o formulário. O envio gerenciado cuida da entrega e das tentativas, sem exigir uma estrutura pesada no projeto.

## Detalhes técnicos
- Manter o layout atual e os tokens de cor, usando o token marfim existente.
- Criar um envio específico para novos apoios, sem aceitar destinatário ou modelo arbitrário pelo navegador.
- Validar nome, telefone e consentimento; incluir uma proteção simples contra robôs e uma chave de idempotência para não duplicar o aviso.
- O aviso conterá apenas os dados preenchidos no formulário e será enviado para o endereço definido da campanha.
- Preservar WCAG AA, foco visível, leitura por tecnologias assistivas e boa adaptação a telas menores.
