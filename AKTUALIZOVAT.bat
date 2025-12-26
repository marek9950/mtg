@echo off
chcp 65001 >nul
echo Spracovavam zoznamy kariet z priečinka /karty...

:: 1. Zmažeme starý db.js ak existuje
if exist db.js del db.js

:: 2. Vytvoríme nový db.js s hlavičkou
echo const ALL_CARDS = ` > db.js

:: 3. Skontrolujeme priečinok karty
if not exist karty (
    echo Priečinok 'karty' neexistuje! Vytváram ho...
    mkdir karty
)

:: 4. Prejdeme súbory a pridáme ich obsah
pushd karty
for %%f in (*.txt *.csv) do (
       echo Spracovavam: %%f
       type "%%f" >> ..\db.js
       echo. >> ..\db.js
)
popd

:: 5. Ukončíme premennú v JS
echo `; >> db.js

echo.
echo ========================================================
echo Hotovo! Zoznam kariet bol nanovo vygenerovany z priečinka 'karty'.
echo ========================================================
pause
