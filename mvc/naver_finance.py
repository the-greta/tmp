import requests
from bs4 import BeautifulSoup


base_url = "https://finance.naver.com/sise/sise_market_sum.nhn"

html = requests.get(base_url + "?&page=1").text
soup = BeautifulSoup(html, "html.parser")
table_headers = soup.select("table.type_2 > thead > tr > th")
table_headers = [th.text for th in table_headers]

page = 1
datas = []
errors = []

while True:
    response = requests.get(base_url + f"?&page={page}")
    print(f"page: {page}, response: {response}")

    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    table_rows = soup.select("table.type_2 > tbody > tr")
    if len(table_rows) == 1:
        break

    for table_row in table_rows:
        tds = table_row.select("td")
        if len(tds) == 1:
            continue
        try:
            tmp = {}
            tmp["code"] = tds[1].select_one("a.tltle")["href"].split("=")[1]
            for i in range(len(table_headers)):
                tmp[table_headers[i]] = tds[i].text.strip() if tds[i].text else ""
            datas += [tmp]

        except:
            errors += tds[1].select_one("a.tltle")["href"].split("=")[1]

    print(f"succeed scraping {len(datas)} rows")

    page += 1
