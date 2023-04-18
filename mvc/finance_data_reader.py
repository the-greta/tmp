import re
import FinanceDataReader as fdr
import pandas as pd
from tqdm import tqdm


regex_date = re.compile(r"[0-9]{4}-[0-9]{2}-[0-9]{2}")


def get_finance_daily_data(code_list, start_date, end_date):
    for code in code_list:
        df = fdr.DataReader(code, start_date, end_date)
        df = df[["Close", "Volume"]]
        df = df.reset_index()
        df["Code"] = code
        yield df


def get_finance_data(market: str, startdate: str, enddate: str):
    if not re.fullmatch(regex_date, startdate) or not re.fullmatch(
        regex_date, startdate
    ):
        print("Please input date in a proper pattern: 0000-00-00!")
        return

    market = market.lower()
    if market == "kospi":
        print("kospi selected. start fetching data...")
        raw_finance_df = fdr.StockListing("KOSPI")

    elif market == "kosdaq":
        print("kosdaq selected.  start fetching data...")
        raw_finance_df = fdr.StockListing("KOSDAQ")
        raw_finance_df = raw_finance_df[raw_finance_df["Market"] != "KOSDAQ GLOBAL"]

    else:
        print('Please select "kospi" or "kosdaq"!')
        return

    finance_df = raw_finance_df[["Code", "Name", "Market"]]
    print(f"fetching Done. Length of data: {len(finance_df)}")

    codes = finance_df["Code"].tolist()
    fainance_daily_df_list = get_finance_daily_data(codes, startdate, enddate)

    merged_finance_daily_df = pd.DataFrame()
    for finace_daily_df in tqdm(fainance_daily_df_list):
        merged_finance_daily_df = pd.concat(
            [merged_finance_daily_df, finace_daily_df], axis=0
        )

    res_df = pd.merge(finance_df, merged_finance_daily_df)
    filename = f"./data/{market}_{startdate}_{enddate}.csv"
    res_df.to_csv(filename, encoding="utf-8-sig", index=False)

    print(f"saved {filename}!")
    return
