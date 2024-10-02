# Usage Instructions for `jb.min.js`

This script is intended for use on websites hosted or created by JB Toner. It dynamically adds a footer to the site, either displaying "Powered by JB Toner" or "Hosted by JB Toner" based on a parameter passed in the script.

## For WordPress:
To include the `jb.min.js` file in your WordPress site, use the following PHP snippet:

### Enqueue the Script:
```php
function enqueue_jbtoner_script() {
    wp_enqueue_script( 'jbtoner-footer', 'https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/jb.min.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_jbtoner_script' );
```

### Pass the Parameter (Powered or Hosted):
```php
function add_jbtoner_footer() {
    echo '<script>createJbFooter("powered");</script>'; 
}
add_action( 'wp_footer', 'add_jbtoner_footer' );
```

## HTML Sites:
### For hosted:
```html
<script src="https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/jb.min.js"></script>
<script>
    createJbFooter('hosted');
</script>
```

###For Powered
```html
<script src="https://raw.githubusercontent.com/DarrenToner/Poweredby-Hostedby-JbToner.com/master/jb.min.js"></script>
<script>
    createJbFooter('powered');
</script>
```

Ensure you replace the parameter ('powered' or 'hosted') depending on what you want to display on your client's site.

