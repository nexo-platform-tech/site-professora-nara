# Refinamento editorial da campanha

## Objetivo
Trocar o aspecto de template por uma composição política editorial, preservando conteúdo, paleta, acessibilidade e a fita do topo.

## Alterações
- Deixar todas as fotografias com cortes retos (`rounded-none`), incluindo destaque principal, educação antirracista, manifesto e área “Além da política”.
- Refazer o destaque da foto principal com planos retangulares sólidos sobrepostos, sem curvas.
- Remover os ícones genéricos de “Mandato em números” e “Território e Cuidado”; usar números, palavras-chave e contraste tipográfico como âncoras visuais.
- Transformar “Mandato em números” em três cartões iguais no desktop, com mesma altura, três cores sólidas e alinhamento à esquerda.
- Padronizar as seções principais em `py-16 md:py-24`, respeitando apenas o espaço necessário abaixo do topo fixo.
- Alinhar título e lista da trajetória pelo topo, mantendo os pontos numerados e o espaçamento existente.

## Validação
- Conferir desktop e celular para cortes, alinhamentos e ritmo vertical.
- Confirmar contraste WCAG, ausência dos ícones removidos e funcionamento sem erros.

## Detalhes técnicos
- Mudanças concentradas no componente da página, usando apenas utilitários Tailwind.
- Botões e pills mantêm seus formatos atuais; a remoção de curvas se aplica exclusivamente às fotografias e à moldura visual do Hero.
