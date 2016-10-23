var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AvOWU65g2gmhFTaF_8m3H3ZYUAD0IYD6BC5jvc-HbtfQvutR9SB2S0cPlQRbTqTR'
    });
}

// 1. Define pokemon data format, create mock pokemon data
map_items = [
    {
        "pokemon_id": 12,
        "expire": 1234567,
        "longtitude": -73.9800345,
        "latitude": 40.7596651,
    }
]

// 2. Create pokemon image on map with layer
function get_pokemon_layer_from_map_items(map_items) {
    var layer = new Microsoft.Maps.Layer();
    var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
    layer.add(pushpins);
    return layer;
    
    
}
var pokemon_layer = get_pokemon_layer_from_map_items(map_items);
map.layers.insert(layer);

// 3. Add pokemon counter down refresh

// 4. Connect with REST API

