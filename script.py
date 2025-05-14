import json

tipo_de_dado = input("Press 1 - Ingredients, 2 - Steps: ")

def txt_para_json(caminho_txt, caminho_json):
    try:
        with open(caminho_txt, 'r', encoding='utf-8') as arquivo_txt:
            linhas = [linha.strip() for linha in arquivo_txt if linha.strip()]

        if tipo_de_dado == '':
            dados = {
                "ingredients": linhas
            }
        else:
            dados = {
                "steps": linhas
            }

        with open(caminho_json, 'w', encoding='utf-8') as arquivo_json:
            json.dump(dados, arquivo_json, ensure_ascii=False, indent=4)

        print(f"Arquivo JSON salvo com sucesso em: {caminho_json}")

    except Exception as e:
        print(f"Erro ao converter o arquivo: {e}")

# Exemplo de uso
txt_para_json('input.txt', 'output.json')
