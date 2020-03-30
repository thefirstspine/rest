import { ILocalized } from '../@shared/rest-shared/base';
import { ILoot } from '../@shared/rest-shared/entities';

export class QuestsLibrary {

  static all(): IQuest[] {
    const ret: IQuest[] = [
      /* ===========================================================
      SIDE QUESTS
      =========================================================== */
      {
        id: 'sample',
        name: {
          fr: 'Test',
          en: '',
        },
        description: {
          fr: 'Test',
          en: '',
        },
        loots: [{name: 'shard', num: 10}],
      },
      /* ===========================================================
      MAIN QUESTS ENTRYPOINTS
      =========================================================== */
      {
        id: 'sample',
        name: {
          fr: 'Test',
          en: '',
        },
        description: {
          fr: 'Test',
          en: '',
        },
        loots: [{name: 'shard', num: 10}],
      },
      /* ===========================================================
      QUEST: TEST
      =========================================================== */
      {
        id: 'sample',
        name: {
          fr: 'Test',
          en: '',
        },
        description: {
          fr: 'Test',
          en: '',
        },
        loots: [{name: 'shard', num: 10}],
      },
    ];

    return ret;
  }

  static find(id: string): IQuest|undefined {
    return this.all().find(e => e.id === id);
  }

}

export interface IQuest {

  id: string;
  name: ILocalized;
  description: ILocalized;
  loots: ILoot[];
  dependsOn?: string;

}
