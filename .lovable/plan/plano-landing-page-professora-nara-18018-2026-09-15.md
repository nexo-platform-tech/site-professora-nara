# Plano — Landing page Professora Nara 18018

## Resultado
Criar a página inicial completa, responsiva e acessível, seguindo o conceito visual “O abraço”, a paleta fornecida e a ordem exata das seções do briefing.

## Implementação
1. **Fundação visual**
   - Configurar a paleta semântica e a família Saira no sistema visual existente.
   - Preservar contraste WCAG AA, foco visível, navegação por teclado e suporte a redução de movimento.
   - Criar componentes reutilizáveis para botões, títulos com pesos mistos, blocos animados e placeholders visuais.

2. **Cabeçalho e abertura**
   - Cabeçalho fixo com desfoque, identidade “Professora Nara”, número 18018, partido e botão “Quero apoiar”.
   - Abertura 50/50 com texto escalonado, número em grande destaque, chamada principal e composição geométrica envolvendo o placeholder da candidata.

3. **Conteúdo da campanha**
   - Mandato em números com três cards intertravados e entrada escalonada.
   - Trajetória em composição editorial com destaque para os 33 anos na educação pública e os quatro marcos informados.
   - Bloco Educação Antirracista em verde escuro, com mensagem de impacto e placeholder de ilustração.
   - Território e Cuidado em grid assimétrico 70/30 no desktop e empilhado em telas menores.
   - Manifesto centralizado com animação lenta de entrada.

4. **Apoio e rodapé**
   - Formulário visual de apoio com campos acessíveis e mensagem “Minas é nossa! E eu conto com você.”
   - Chips de humanização com interação sutil.
   - Rodapé legal azul com candidatura, número, partido e o marcador de CNPJ solicitado.

5. **Movimento e acabamento**
   - Adicionar Motion e aplicar `whileInView` com deslocamento vertical suave, stagger e execução única por seção.
   - Criar placeholders SVG responsivos, com sobreposições e encaixes que reforcem o conceito “O abraço”.
   - Incluir metadados próprios da campanha e verificar a página em desktop e celular.

## Detalhes técnicos
- React 19 com componentes pequenos na página inicial.
- Tailwind CSS v4 configurado em `src/styles.css`; não será criado `tailwind.config.js`.
- Google Fonts carregada no cabeçalho do documento, sem importação remota no CSS.
- O formulário será demonstrativo nesta etapa, sem envio ou armazenamento, pois o briefing não define destino dos dados.
