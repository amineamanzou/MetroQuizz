# Installation

Add the host :

```sh
sudo vim /etc/hosts
127.0.0.1 metroquizz.dev
```

Virtual Host for apache :

```sh
<Virtualhost *:80>
    DocumentRoot "/path/to/directory/"
    ServerName metroquizz.dev
    ServerAlias metroquizz.dev
    DirectoryIndex index.html
    <Directory /path/to/directory/>
        Options Indexes FollowSymlinks ExecCGI Includes
        AllowOverride All
        Order allow,deny
        Allow from All
    </Directory>    
</Virtualhost>
```

Relancer le serveur :

```sh
sudo apachectl restart
```
