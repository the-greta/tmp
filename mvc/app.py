from finance_data_reader import get_finance_data

MARKET = "kosdaq"
STARTDATE = "2020-01-01"
ENDDATE = "2022-12-31"

get_finance_data(MARKET, STARTDATE, ENDDATE)
