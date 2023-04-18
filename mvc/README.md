## 개요
본 코드는 mvc 프로젝트 개발에 앞서 prototype 그레프 작성을 위한 scraping 코드임.


## 설치 및 사용법
### 가상환경 실행 (선택)
```bash
python -m venv venv
source venv/Scripts/activate
```

### 패키지 설치
```bash
pip install -r requirements.txt
```

### scraping 시작
app.py 설정 변경 후 실행. `./data`에 scraping 결과 저장

```bash
python app.py
```


## 라이선스
```
beautifulsoup4      4.12.2     MIT License
black               23.3.0     MIT License
certifi             2022.12.7  Mozilla Public License 2.0 (MPL 2.0)
charset-normalizer  3.1.0      MIT License
click               8.1.3      BSD License
colorama            0.4.6      BSD License
finance-datareader  0.9.50     MIT License
idna                3.4        BSD License
lxml                4.9.2      BSD License
mypy-extensions     1.0.0      MIT License
numpy               1.24.2     BSD License
packaging           23.1       Apache Software License; BSD License
pandas              2.0.0      BSD License
pathspec            0.11.1     Mozilla Public License 2.0 (MPL 2.0)
platformdirs        3.2.0      MIT License
python-dateutil     2.8.2      Apache Software License; BSD License
pytz                2023.3     MIT License
requests            2.28.2     Apache Software License
requests-file       1.5.1      Apache Software License
six                 1.16.0     MIT License
soupsieve           2.4.1      MIT License
tomli               2.0.1      MIT License
tqdm                4.65.0     MIT License; Mozilla Public License 2.0 (MPL 2.0)
typing_extensions   4.5.0      Python Software Foundation License
tzdata              2023.3     Apache Software License
urllib3             1.26.15    MIT License
```
