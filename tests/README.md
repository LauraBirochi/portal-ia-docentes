# 🧪 Suíte de Testes Automatizados – Portal de Apoio Docente

Este diretório contém a infraestrutura de testes automatizados do projeto, estruturada modularmente para suportar a validação contínua da aplicação e a expansão dos 7 encontros do curso.

---

## 📂 Estrutura Modular de Testes

```
tests/
├── __init__.py                 # Inicializador do pacote de testes
├── test_auth_security.py       # Testes de Segurança, Autenticação, RBAC e Sessões
├── test_data_integrity.py      # Testes de Integridade da Camada de Dados (Encontro 1)
└── README.md                   # Diretrizes de execução e criação de novos testes
```

---

## 🚀 Como Executar os Testes

### 1. Executar Todas as Suítes (Test Discovery)
```bash
python -m unittest discover -s tests -p "test_*.py"
```

### 2. Executar Suítes Específicas
```bash
# Testes de Segurança e RBAC
python -m unittest tests/test_auth_security.py

# Testes de Integridade de Dados
python -m unittest tests/test_data_integrity.py
```

---

## 📐 Padrão para Novos Testes (Boas Práticas de Arquitetura)

Ao criar testes para os próximos encontros (ex: Encontro 2 a 7) ou novos módulos:

1. **Nomenclatura:** Nomeie o arquivo sempre com o prefixo `test_*.py` (ex: `test_encontro2_integrity.py`).
2. **Isolamento e Stateless:** Garanta que cada teste seja independente, limpando sessões ou mocks no `setUp()` e `tearDown()`.
3. **Resolução de Caminhos:** Utilize `os.path.dirname(os.path.dirname(os.path.abspath(__file__)))` para referenciar arquivos estáticos e templates na raiz do projeto.
