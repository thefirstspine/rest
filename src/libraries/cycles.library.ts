import { ICycle } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
export class CyclesLibrary {

  static readonly cycles: ICycle[] = [
    {
      id: `renewal-2020`,
      name: {
        fr: `Cycle du renouveau 2020`,
        en: `Cycle of the Renewal 2020`,
      },
      description: {
        fr: `Arena fait peau neuve et lance son premier cycle, le Cycle du Renouveau 2020 !`,
        en: `Arena is getting a facelift and is launching its first cycle, the Cycle of the Renewal 2020!`,
      },
      timestampFrom: 0,
      timestampTo: (new Date('2020-05-01 14:59:59')).getTime() / 1000,
    },
    {
      id: `great-ancient-2020`,
      name: {
        fr: `Cycle du Grand Ancien 2020`,
        en: `Cycle of the Great Ancient 2020`,
      },
      description: {
        fr: `Les Grands Anciens sont à la fête ! Célébrez ces créatures disparues dans un tournoi sans pitié et remportez la carte prémium de l'invocateur.`,
        en: `We are celebrating the Great Ancients! Celebrate these vanished creatures in a merciless tournament and win the summoner's premium card`,
      },
      timestampFrom: (new Date('2020-05-01 15:00:00')).getTime() / 1000,
      timestampTo: (new Date('2020-06-12 14:59:59')).getTime() / 1000,
    },
    {
      id: `treasure-2020`,
      name: {
        fr: `Cycle du Trésor 2020`,
        en: `Cycle of the Treasure 2020`,
      },
      description: {
        fr: `Des mers du sud nous sont parvenus les corsaires sanguinaires et sans scrupule. Ils recherchent de mystérieux galions d'or disséminés dans tout le Royaume. Vous pouvez en récolter en tournoi ou en partie classique, et les échanger dans la boutique !`,
        en: `Bloodthirsty and unscrupulous corsairs reached us from their southern seas. They are looking for mysterious golden galleons scattered throughout the Kingdom. You can collect them in a tournament or in a classic game, and exchange them in the shop!`,
      },
      timestampFrom: (new Date('2020-06-12 15:00:00')).getTime() / 1000,
      timestampTo: (new Date('2020-07-24 14:59:59')).getTime() / 1000,
    },
    {
      id: `souvenirs-2020`,
      name: {
        fr: `Cycle des Souvenirs 2020`,
        en: `Cycle of the Souvenirs 2020`,
      },
      description: {
        fr: `Pendant ce cycle pourfendez vos opposants et volez leurs armes. Dans tous les types de jeu, vous aurez des cartes "souvenirs" en fonction de la destinée de votre ennemi.`,
        en: `During this cycle slay your opponents and steal their weapons. In all types of game, you will have "souvenir" cards depending on the destiny of your enemy.`,
      },
      timestampFrom: 0,
      timestampTo: 0,
    },
    {
      id: `harvest-2020`,
      name: {
        fr: `Cycle de la Moisson 2020`,
        en: `Cycle of the Harvest 2020`,
      },
      description: {
        fr: `Célébrez la Moisson en Exodia en participant au versus thématique de ce cycle : chaque créature tuée vous soignera !`,
        en: `Celebrate the Harvest in Exodia by participating in this cycle's thematic versus: each creature killed will heal you!`,
      },
      timestampFrom: 0,
      timestampTo: (new Date('2020-10-16 14:59:59')).getTime() / 1000,
    },
  ];

  static current(): ICycle|undefined {
    const now: number = Date.now() / 1000;
    return this.cycles.find((cycle: ICycle) => {
      return cycle.timestampFrom <= now && cycle.timestampTo > now;
    });
  }

  static currentNum(): number {
    const now: number = Date.now() / 1000;
    return this.cycles.findIndex((cycle: ICycle) => {
      return cycle.timestampFrom <= now && cycle.timestampTo > now;
    });
  }

  static find(id: string): ICycle|undefined {
    return this.cycles.find(e => e.id === id);
  }

}
