import com.example.ClockheartBackend.models.Attack;
import com.example.ClockheartBackend.models.Item;
import com.example.ClockheartBackend.models.Player;
import com.example.ClockheartBackend.models.Shop;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PlayerTest {

    private Player player;
    private Shop shop;
    private Item item;

    @Before
    public void before(){
        player = new Player("Fred", 5, 5, 5, "Broca");
        shop = new Shop("Zebediah Flint", 2, 2, 2);
        item = new Attack("Sword", 5, shop, 5);
        shop.addItem(item);
    }

    @Test
    public void shopHasItem(){
        assertEquals(1, shop.getItems().size());
    }

    @Test
    public void playerCanBuyItem(){
        player.buyItem(item);
        assertEquals(5, player.getCurrency());
        assertEquals(1, player.getItems().size());
    }
}
