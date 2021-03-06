import { Controller, Get, Param } from '@nestjs/common';
import { DecksLibrary } from '../libraries/decks.library';
import { CardsLibrary } from '../libraries/cards.library';
import { TriumphsLibrary } from '../libraries/triumphs.library';
import { AvatarsLibrary } from '../libraries/avatars.library';
import { GamesTypesLibrary } from '../libraries/games-types.library';
import { QuestsLibrary } from 'src/libraries/quests.library';
import { ShopItemsService } from 'src/shop-items/shop-items.service';

@Controller('rest')
/**
 * Main service controller.
 */
export class RestController {

  constructor(
    private readonly shopItemsService: ShopItemsService,
  ) {}

  @Get('decks')
  /**
   * Endpoint /rest/decks
   * Returns a deck list
   */
  getDecks() {
    return DecksLibrary.decks;
  }

  @Get('decks/:id')
  /**
   * Endpoint /rest/decks/:id
   * Returns a deck
   */
  getDeck(@Param('id') id) {
    return DecksLibrary.find(id);
  }

  @Get('cards')
  /**
   * Endpoint /rest/cards
   * Returns a cards list
   */
  getCards() {
    return CardsLibrary.cards;
  }

  @Get('cards/:id')
  /**
   * Endpoint /rest/cards/:id
   * Returns a card
   */
  getCard(@Param('id') id) {
    return CardsLibrary.find(id);
  }

  @Get('shop-items')
  /**
   * Endpoint /rest/shop-items
   * Returns a shop items list
   */
  getShopItems() {
    return this.shopItemsService.all();
  }

  @Get('shop-items/:id')
  /**
   * Endpoint /rest/shop-items/:id
   * Returns a shop item
   */
  getShopItem(@Param('id') id) {
    return this.shopItemsService.find(id);
  }

  @Get('triumphs')
  /**
   * Endpoint /rest/triumphs
   * Returns a triumphs list
   */
  getTriumphs() {
    return TriumphsLibrary.triumphs;
  }

  @Get('triumphs/:id')
  /**
   * Endpoint /rest/triumphs/:id
   * Returns a triumph
   */
  getTriumph(@Param('id') id) {
    return TriumphsLibrary.find(id);
  }

  @Get('avatars')
  /**
   * Endpoint /rest/avatars
   * Returns an avatars list
   */
  getAvatars() {
    return AvatarsLibrary.avatars;
  }

  @Get('avatars/:id')
  /**
   * Endpoint /rest/avatars/:id
   * Returns an avatar
   */
  getAvatar(@Param('id') id) {
    return AvatarsLibrary.find(id);
  }

  @Get('game-types')
  /**
   * Endpoint /rest/game-types
   * Returns a game types list
   */
  getGameTypes() {
    return GamesTypesLibrary.all();
  }

  @Get('game-types/:id')
  /**
   * Endpoint /rest/game-types/;id
   * Returns a game type
   */
  getGameType(@Param('id') id) {
    return GamesTypesLibrary.find(id);
  }

  @Get('quests')
  /**
   * Endpoint /rest/quests
   * Returns the quests
   */
  getQuests(@Param('id') id) {
    return {
      daily: QuestsLibrary.questForToday,
      weekly: QuestsLibrary.questForThisWeek,
    };
  }

}
