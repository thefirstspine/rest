import { CyclesLibrary } from './cycles.library';
import { IShopItem, ICycle } from 'src/@shared/rest-shared/entities';

// tslint:disable: max-line-length
export class ShopItemsLibrary {

  static all(): IShopItem[] {
    const shopItems: IShopItem[] = [
      {
        id: '250-shards',
        name: {
          fr: `250 éclats de mana`,
          en: ``,
        },
        description: {
          fr: `250 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 4h.`,
          en: ``,
        },
        categories: ['shards'],
        price: {
          num: 2.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 250},
        ],
      },
      {
        id: '500-shards',
        name: {
          fr: `500 éclats de mana`,
          en: ``,
        },
        description: {
          fr: `500 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 8h.`,
          en: ``,
        },
        categories: ['shards', 'featured'],
        price: {
          num: 4.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 500},
        ],
      },
      {
        id: '1000-shards',
        name: {
          fr: `1000 éclats de mana`,
          en: ``,
        },
        description: {
          fr: `1000 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 16h.`,
          en: ``,
        },
        categories: ['shards'],
        price: {
          num: 8.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 1000},
        ],
      },
      {
        id: '2000-shards',
        name: {
          fr: `2000 éclats de mana`,
          en: ``,
        },
        description: {
          fr: `2000 éclats de mana à ajouter à votre bourse. Vous aurez également droit à un niveau de pledge spécial lors de la campagne de financement participatif. Equivalent en temps de jeu : à peu près 32h.`,
          en: ``,
        },
        categories: ['shards'],
        price: {
          num: 16.5,
          currency: 'eur',
        },
        loots: [
          {name: 'shard', num: 2000},
        ],
      },
    ];

    const index: number = CyclesLibrary.currentNum();
    const cycle: ICycle = CyclesLibrary.current();
    if (cycle.id === 'treasure-2020') {
      // Add exchanges in featured & seasonial
      shopItems.push(
        {
          id: 'exchange-galleons',
          name: {
            fr: `Echange aux Corsaires`,
            en: ``,
          },
          description: {
            fr: `Echange 5 gallions d'or contre 10 éclats de mana.`,
            en: ``,
          },
          categories: ['seasonial', 'shards'],
          price: {
            num: 5,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'shard', num: 10},
          ],
          oneTimePurchase: false,
        },
        {
          id: 'cover-corsair',
          name: {
            fr: `Protège-cartes Corsaire`,
            en: ``,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie des Corsaires.`,
            en: ``,
          },
          categories: ['seasonial', 'covers'],
          price: {
            num: 50,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'cover-corsair', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-corsair',
          name: {
            fr: `Style Corsaire`,
            en: ``,
          },
          description: {
            fr: `Débloque le style "Corsaire" sur toutes vos cartes pour leur donner un aspect sauvage.`,
            en: ``,
          },
          categories: ['seasonial', 'styles'],
          price: {
            num: 100,
            currency: 'golden-galleon',
          },
          loots: [
            {name: 'style-corsair', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 0) {
      shopItems.push(
        {
          id: 'holo-soul-of-a-sacrified-hunter',
          name: {
            fr: `Âme d'un Chasseur Sacrifié holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Âme d'un Chasseur Sacrifié. Cet article est également une récompense à la participation au tournois pendant le Cycle du Renouveau 2020.`,
            en: ``,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-soul-of-a-sacrified-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-hunter',
          name: {
            fr: `Chasseur holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Chasseur`,
            en: ``,
          },
          categories: index === 0 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-nostalgy',
          name: {
            fr: `Style nostaglique`,
            en: ``,
          },
          description: {
            fr: `Débloque le style "Nostalgique" sur toutes vos cartes et leur donne un air de prototype. Il s'agit du style du premier prototype présenté publiquement lors du Festival des Fous du Jeu 2015.`,
            en: ``,
          },
          categories: index === 0 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-nostalgy', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 1) {
      shopItems.push(
        {
          id: 'holo-deadly-viper',
          name: {
            fr: `Vipère Mortelle holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Vipère Mortelle. Cet article est également une récompense à la participation au tournois pendant le Cycle du Grand Ancien 2020.`,
            en: ``,
          },
          categories: index === 1 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-deadly-viper', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-summoner',
          name: {
            fr: `Invocateur holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Invocateur`,
            en: ``,
          },
          categories: index === 1 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-summoner', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-scales',
          name: {
            fr: `Style écailles`,
            en: ``,
          },
          description: {
            fr: `Débloque le style "Ecailles" sur toutes vos cartes et leur donne un aspect de grand ancien.`,
            en: ``,
          },
          categories: index === 1 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-scales', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-hunter',
          name: {
            fr: `Protège-cartes Chasseur`,
            en: ``,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie du Chasseur.`,
            en: ``,
          },
          categories: index === 0 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-hunter', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-summoner',
          name: {
            fr: `Protège-cartes Invocateur`,
            en: ``,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie de l'Invocateur.`,
            en: ``,
          },
          categories: index === 1 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-summoner', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    if (index >= 2) {
      shopItems.push(
        {
          id: 'holo-shadows-banner',
          name: {
            fr: `Bannière des Ombres holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Bannière des Ombres. Cet article est également une récompense à la participation au tournois pendant le Cycle du Trésor 2020.`,
            en: ``,
          },
          categories: index === 2 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-shadows-banner', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'holo-conjurer',
          name: {
            fr: `Illusionniste holo`,
            en: ``,
          },
          description: {
            fr: `Débloque la version holographique numérique de Illusionniste`,
            en: ``,
          },
          categories: index === 2 ? ['holos', 'featured'] : ['holos'],
          price: {
            num: 100,
            currency: 'shards',
          },
          loots: [
            {name: 'holo-conjurer', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'style-cartographer',
          name: {
            fr: `Style cartographe`,
            en: ``,
          },
          description: {
            fr: `Débloque le style "Cartographe" sur toutes vos cartes pour vous aider à vous repérer dans le ciel d'Exodia.`,
            en: ``,
          },
          categories: index === 2 ? ['styles', 'featured'] : ['styles'],
          price: {
            num: 250,
            currency: 'shards',
          },
          loots: [
            {name: 'style-cartographer', num: 1},
          ],
          oneTimePurchase: true,
        },
        {
          id: 'cover-conjurer',
          name: {
            fr: `Protège-cartes Invocateur`,
            en: ``,
          },
          description: {
            fr: `Débloque le protège-cartes à l'effigie de l'Illusionniste.`,
            en: ``,
          },
          categories: index === 2 ? ['covers', 'featured'] : ['covers'],
          price: {
            num: 150,
            currency: 'shards',
          },
          loots: [
            {name: 'cover-conjurer', num: 1},
          ],
          oneTimePurchase: true,
        },
      );
    }

    return shopItems;
  }

  static find(id: string): IShopItem|undefined {
    return this.all().find(e => e.id === id);
  }

}
