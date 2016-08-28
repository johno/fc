mkdir -p tmp

curl http://localhost:3000 | gunzip > tmp/index.html
curl http://localhost:3000/resorts/bridger-bowl | gunzip > tmp/resort-page.html

uncss -H assets/ tmp/*.html > assets/tachyons.un.css
