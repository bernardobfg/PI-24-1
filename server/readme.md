# SmartGate
### URL deploy: https://pi-24-1.onrender.com/

## Rotas da aplicação:
| Método | rota | Descrição 
|---|---| --- |
| `GET` | vehicle | Buscar todos os veiculos cadastrados

___


| Método | rota |Descrição 
|---|---| --- | 
| `GET` | vehicle/_<license_plate_> |Buscar um veículo dada a placa

___

| Método | rota |Descrição 
|---|---| --- | 
| `POST` | vehicle | Criar carro autorizado pela catraca

Corpo da aplicação
```json
{
	"licensePlate": string,
	"owner": string,
}
```

___

| Método | rota |Descrição 
|---|---| --- | 
| `DELETE` | vehicle/_<id_> | Deletar um veiculo dado ID

___

| Método | rota |Descrição 
|---|---| --- | 
| `GET` | record/ | Buscar todos os veiculos registrados pela catraca

___

| Método | rota |Descrição 
|---|---| --- | 
| `CREATE` | record/ | Criar um registro, quando a catraca reconhecer uma placa
```json
{
    "licensePlate": string,
    "allowed": boolean,
    "confidence": float
}
```
