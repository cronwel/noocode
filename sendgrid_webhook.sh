sleep 10

function localtunnel {
 lt -p 5000 -s difhgnsfiennd -o
}

until localtunnel; do
echo 'localtunnel server crashed'
sleep 2
done
