curl -X POST https://api.pagar.me/1/recipients -H 'content-type: application/json' -d '{
    "anticipatable_volume_percentage": "85", 
    "api_key": "ak_test_LBF3hJz5wpgaEPnGAaNB5BFR4LHSFL", 
    "automatic_anticipation_enabled": "true", 
    "bank_account": {
    		"bank_code": "341",
        "agencia": "0932",
        "agencia_dv": "5",
        "conta": "58054",
        "type": "conta_corrente",
        "conta_dv": "1",
        "document_number": "26268738888",
        "legal_name": "API BANK ACCOUNT"
    }, 
    "transfer_day": "5", 
    "transfer_enabled": "true", 
    "transfer_interval": "weekly",
    "postback_url": "https://requestb.in/tl0092tl"
}'
