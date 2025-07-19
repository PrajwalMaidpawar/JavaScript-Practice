let m = 
[
  "[INITIALIZING SYSTEM INTERFACE...]",
  "> Loading kernel modules...",
  "> Detected target OS: Ubuntu 22.04 LTS",
  "> Exploiting vulnerability: CVE-2023-2199",
  "> Buffer overflow payload deployed... [SUCCESS]",
  "> Elevating privileges... UID=0",
  "> Reading /etc/passwd...",
  "> Hashes dumped to /tmp/hashes.txt",
  "> Cracking passwords with JohnTheRipper...",
  "> Password found: root@1234",
  "> Connecting to target database...",
  "> Dumping tables: users, transactions, logs",
  "> Exporting data to /tmp/dump.sql",
  "> Injecting code via SQLi: SELECT * FROM secrets --",
  "> Firewall rules disabled",
  "> DNS spoofing enabled → redirecting traffic to 127.0.0.1",
  "> Running WiFi sniffer on wlan0...",
  "> Capturing handshake... ✔",
  "> Bruteforcing WPA2 key... [39%]",
  "> Disabling remote logging...",
  "> Planting logic bomb in cron.daily",
  "> SYSTEM COMPROMISED ✔"
]


const sleep = async (second) => {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

const hack = async(message) => {
    await sleep(0.5);
    const text = document.getElementById("messages");
    text.innerHTML = text.innerHTML + message + "<br>";
}
(async () => {
    for (let i = 0; i < m.length; i++) {
        await hack(m[i]);
    }
})();
