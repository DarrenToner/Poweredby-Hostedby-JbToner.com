# Usage Instructions for `hostedbyjbtoner.min.js` and `poweredbyjbtoner.min.js`

These scripts are intended for use on websites hosted or created by JB Toner. Follow the instructions below to implement them on WordPress or HTML-based websites.

## For WordPress:
To include the JavaScript files in your WordPress site, use the following PHP snippets:

### Hosted by JB Toner:

```php
function enqueue_hosted_by_jbtoner_script() {
    wp_enqueue_script( 'hosted-by-jbtoner', 'https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/hostedbyjbtoner.min.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_hosted_by_jbtoner_script' );
```

### Powered by JB Toner:
```php
function enqueue_powered_by_jbtoner_script() {
    wp_enqueue_script( 'powered-by-jbtoner', 'https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/poweredbyjbtoner.min.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_powered_by_jbtoner_script' );
```

## For Plain HTML

### Hosted by JB Toner:
```html
<script src="https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/hostedbyjbtoner.min.js"></script>
```

### Powered by Jb Toner
```html
<script src="https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/poweredbyjbtoner.min.js"></script>
```
