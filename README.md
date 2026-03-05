# LP São José - Domo Atelier

**Landing Page de Alta Conversão** focada na jornada emocional do cliente católico.

## 🎯 Estratégia de Copy

### Gatilhos Emocionais Aplicados

| Gatilho | Seção | Objetivo |
|---------|-------|----------|
| **Aspiração** | Hero | "Eu quero ter São José em casa" |
| **Identidade** | Por que São José? | Conexão espiritual (Protetor, Esposo Leal, Operário, Intercessor) |
| **Sonho** | O lar como Igreja | Target: "Igreja Doméstica" do catálogo |
| **Beleza** | Arte Sacra | Valorização do artesanal vs industrializado |
| **Emoção** | Presentear | Gatilhos: noivas, casamentos, novos lares |
| **Confiança** | FAQ | Remover objeções (prazo, preço, urgência) |
| **Urgência** | CTA Final | "Sua família merece a proteção de São José" |

## 📋 Jornada do Cliente

```
1. ATENÇÃO  → Hero aspiracional
2. IDENTIFICAÇÃO → Por que São José?
3. DESEJO 1 → O lar como Igreja (sonho)
4. DESEJO 2 → Beleza que leva à oração (arte)
5. DESEJO 3 → Presentear com sentido (emoção)
6. DÚVIDAS → FAQ (objeções)
7. ESCOLHA → Catálogo (6 produtos)
8. AÇÃO → CTA Urgente
```

## 📁 Estrutura

```
lp-saojose-domo/
├── index.html              # Copy completa com jornada emocional
├── README.md               # Este arquivo
├── assets/
│   ├── css/styles.css      # Estilos mobile-first
│   └── js/script.js        # Animações + FAQ toggle
└── images/                 # Imagens dos produtos
```

## 🎨 Seções da LP

1. **Hero** - Aspiração: "O guardião da Sagrada Família agora no seu lar"
2. **Por que São José?** - 4 razões: Protetor · Esposo Leal · Operário · Intercessor
3. **O Sonho do Lar como Igreja** - Citação da missão Domo
4. **Beleza que Leva à Oração** - 4 diferenciais: Artesanal · Exclusiva · Gesso Cerâmico · Tradição
5. **Presentear com Sentido** - 4 ocasiões: Noivos · Casamentos · Novos Lares · Famílias
6. **FAQ** - 5 objeções: Prazo 25 dias · Preço · Tamanho · Urgência · Entrega
7. **Catálogo** - 6 produtos com descrições personalizadas
8. **CTA Urgente** - "Transforme seu lar numa igreja"
9. **Footer** - Missão, Valores, Contatos

## 🚀 Como Usar

### 1. Adicionar Imagens
Coloque fotos dos produtos na pasta `images/`:

```
produto-1.jpg → São José Operário 02
produto-2.jpg → São José Operário 01  
produto-3.jpg → São José 01 (40cm)
produto-4.jpg → São José 02 (30cm)
produto-5.jpg → São José Dormindo
produto-6.jpg → São José 02 (27cm)
```

### 2. Links WhatsApp
Pré-configurados com mensagens personalizadas:
```
https://wa.me/5591984914107?text=Ola!+Tenho+interesse+na+imagem+Sao+Jose+Operario+02
```

### 3. Deploy
```bash
# Servidor local
scp -r /home/rogerio/Documentos/lp-saojose-domo/* rogeriojunior@192.168.100.22:/var/www/domo/

# Via Traefik
# Configure: domo.seusite.com.br → /var/www/domo/
```

## 📱 Teste Mobile

```bash
# Servidor local
cd /home/rogerio/Documentos/lp-saojose-domo
python3 -m http.server 8080

# Acesse pelo celular (mesma rede)
http://192.168.100.24:8080
```

## 🔧 Personalização

### Cores Principais (variáveis CSS)
```css
:root {
    --primary: #8B7355;      /* Marrom */
    --gold: #D4AF37;        /* Dourado */
    --secondary: #C9A227;   /* Dourado secundário */
    --success: #25D366;     /* WhatsApp */
}
```

## 📊 CTAs WhatsApp por Produto

Cada produto gera uma mensagem pré-preenchida:

| Produto | Mensagem |
|---------|----------|
| Operário 02 | "Olá! Tenho interesse na imagem São José Operário 02" |
| Operário 01 | "Olá! Tenho interesse na imagem São José Operário 01" |
| São José 01 | "Olá! Tenho interesse na imagem São José 01" |
| São José 02 | "Olá! Tenho interesse na imagem São José 02" |
| Dormindo | "Olá! Tenho interesse na imagem São José Dormindo" |

## ✅ Checklist de Lançamento

- [ ] Adicionar imagens reais dos 6 produtos
- [ ] Testar em dispositivos móveis reais
- [ ] Configurar domínio via Traefik
- [ ] Configurar SSL/HTTPS
- [ ] Adicionar pixel Facebook/Google Ads
- [ ] Testar links WhatsApp
- [ ] A/B test headlines
- [ ] Configurar Analytics

---

**Domο Atelier** — *"A beleza da Igreja, no coração do seu lar"*
🛐✝️
