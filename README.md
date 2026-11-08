# costco_receipts_download
Script to download Costco Warehouse purchases within a specified date-range as a CSV, based on https://gist.github.com/dlh3/7e18fec42cc7c43d51e93a6d2bcac6fb

Usage:
- Log in to Costco.com with your account
- Go to Home > Account Home > Orders & Purchases > Warehouse tab. Make sure you can see your Costco receipts
- Open DevTools Console (Ctrl-Shift-J in Chrome. I have not tried this script in other browsers)
- Copy the content of the script in an editor (such as Notepad) and edit the variables startDate and endDate with the date range of your choice (Costco only keeps the receipts of the most recent 2 years I believe)
- Paste the content of the modified script at the Console prompt. Type "allow pasting" to allow pasting if prompted, then paste again.
- Hit Enter. If all goes well, the receipts CSV file should be downloaded.
