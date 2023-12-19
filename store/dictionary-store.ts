import { create } from "zustand";

export type Dictionary = typeof import("@/dictionaries/en.json");

type DictionaryState = {
  dictionary: Dictionary;
  setDictionary: (dictionary: Dictionary) => void;
};

const emptyDictinaory: Dictionary = {
  sidebar: {
    "category.dashboard": "",
    "category.user": "",
    "category.user.child.profile": "",
    "category.user.child.inventory": "",
    "category.user.child.reputation": "",
    "category.user.child.collection": "",
    "category.user.child.banners": "",
    "category.user.child.achievements": "",
    "category.world": "",
    "category.world.child.rating": "",
    "category.world.child.info": "",
    "category.user.child.titles": "",
  },
  header: {
    "user.not-signed-in": "",
    "user.sign-in": "",
    "user.sign-out": "",
    "langulage-switcher.langulage": "",
  },
  dashboard: {
    "dashboard.about": "",
    "dashboard.actions": "",
    "dashboard.actions.capital.shop-seed.label": "",
    "dashboard.actions.capital.shop-seed.description": "",
    "dashboard.actions.capital.shop-seed.button-label": "",
    "dashboard.actions.capital.shop-seed.sheet.price": "",
    "dashboard.actions.capital.shop-seed.sheet.description": "",
    "dashboard.actions.capital.shop-seed.sheet.is-multiply": "",
    "dashboard.actions.capital.shop-seed.sheet.re-growth-days": "",
    "dashboard.actions.capital.shop-seed.sheet.button-label": "",
    "dashboard.actions.capital.shop-seed.sheet.toast.no-currency": "",
    "dashboard.actions.capital.shop-seed.sheet.toast.success": "",
    "dashboard.actions.capital.market.label": "",
    "dashboard.actions.capital.market.description": "",
    "dashboard.actions.capital.market.button-label": "",
    "dashboard.actions.capital.casino.label": "",
    "dashboard.actions.capital.casino.description": "",
    "dashboard.actions.capital.casino.button-label": "",
    "dashboard.actions.garden.shop-recipe.label": "",
    "dashboard.actions.garden.shop-recipe.description": "",
    "dashboard.actions.garden.shop-recipe.button-label": "",
    "dashboard.actions.garden.explore.label": "",
    "dashboard.actions.garden.explore.description": "",
    "dashboard.actions.garden.explore.button-label": "",
    "dashboard.actions.garden.explore.toast.start": "",
    "dashboard.actions.garden.explore.toast.success": "",
    "dashboard.actions.garden.explore.toast.failed": "",
    "dashboard.actions.seaport.fishing.label": "",
    "dashboard.actions.seaport.fishing.description": "",
    "dashboard.actions.seaport.fishing.button-label": "",
    "dashboard.actions.seaport.fishing.toast.start": "",
    "dashboard.actions.seaport.fishing.toast.complete": "",
    "dashboard.actions.seaport.shop-fisher.label": "",
    "dashboard.actions.seaport.shop-fisher.description": "",
    "dashboard.actions.seaport.shop-fisher.button-label": "",
    "dashboard.actions.seaport.shop-fisher.sheet.close": "",
    "dashboard.actions.seaport.shop-fisher.sheet.sell-all-fish": "",
    "dashboard.actions.seaport.shop-fisher.sheet.no-fish": "",
    "dashboard.actions.seaport.shop-fisher.sheet.toast.sell-one": "",
    "dashboard.actions.seaport.shop-fisher.sheet.toast.sell-all": "",
    "dashboard.actions.castle.explore.label": "",
    "dashboard.actions.castle.explore.description": "",
    "dashboard.actions.castle.explore.button-label": "",
    "dashboard.actions.castle.explore.toast.start": "",
    "dashboard.actions.castle.explore.toast.success": "",
    "dashboard.actions.castle.explore.toast.failed": "",
    "dashboard.actions.village.shop-product.label": "",
    "dashboard.actions.village.shop-product.description": "",
    "dashboard.actions.village.shop-product.button-label": "",
    "dashboard.actions.village.shop-product.sheet.price": "",
    "dashboard.actions.village.shop-product.sheet.button-label": "",
    "dashboard.actions.village.shop-product.sheet.toast.no-currency": "",
    "dashboard.actions.village.shop-product.sheet.toast.success": "",
    "dashboard.actions.village.farm.label": "",
    "dashboard.actions.village.farm.description": "",
    "dashboard.actions.village.farm.button-label": "",
    "dashboard.transit": "",
    "dashboard.transit.button": "",
    "dashboard.transit.title": "",
    "dashboard.transit.toast.success.title": "",
    "dashboard.transit.toast.success.description": "",
    "dashboard.transit.toast.no-currency.title": "",
    "dashboard.transit.toast.no-currency.description": "",
    "user.profile.username": "",
    "user.profile.email": "",
    "user.profile.about": "",
    "user.profile.about-placeholder": "",
    "user.profile.save": "",
    "user.inventory.currency": "",
    "user.inventory.currency.empty": "",
    "user.inventory.fish": "",
    "user.inventory.fish.empty": "",
    "user.inventory.product": "",
    "user.inventory.product.empty": "",
    "user.inventory.seed": "",
    "user.inventory.seed.empty": "",
    "user.inventory.crop": "",
    "user.inventory.crop.empty": "",
    "user.inventory.box": "",
    "user.inventory.box.empty": "",
    "user.inventory.gathering": "",
    "user.inventory.gathering.empty": "",
    "user.titles.active-title": "",
    "user.titles.all-titles": "",
    "user.titles.title.createdAt": "",
    "world.info.season.title": "",
    "world.info.season.description": "",
    "world.info.timesDay.title": "",
    "world.info.timesDay.description": "",
    "world.info.weatherToday.title": "",
    "world.info.weatherToday.description": "",
    "world.info.weatherTomorrow.title": "",
    "world.info.weatherTomorrow.description": "",
    "dashboard.actions.seaport.shop-fisher.sheet.price": "",
    "dashboard.actions.seaport.shop-fisher.sheet.button-label": "",
    "dashboard.actions.seaport.shop-fisher.sheet.popover.slider-label": "",
    "dashboard.actions.seaport.shop-fisher.sheet.popover.input-label": "",
    "dashboard.actions.seaport.shop-fisher.sheet.popover.button-label": "",
  },
  location: {
    InTransit: "",
    Capital: "",
    Garden: "",
    Seaport: "",
    Castle: "",
    Village: "",
    ExploreGarden: "",
    ExploreCastle: "",
    Fishing: "",
    FieldWatering: "",
  },
  datatable: {
    next: "",
    previous: "",
    empty: "",
    "rating.user.position": "",
    "rating.user.name": "",
    "rating.user.level": "",
    "rating.user.xp": "",
  },
  item: {
    currency: {
      Ien: "",
      Pearl: "",
    },
    box: {
      Capital: "",
      Garden: "",
      Seaport: "",
      Castle: "",
      Village: "",
    },
    fish: {
      Anchovy: "",
      Bream: "",
      Carp: "",
      Chub: "",
      Ghostfish: "",
      Herring: "",
      RedSnapper: "",
      Sardine: "",
      SmallmouthBass: "",
      Sunfish: "",
      Albacore: "",
      Bullhead: "",
      Eel: "",
      Halibut: "",
      Perch: "",
      RainbowTrout: "",
      RedMullet: "",
      Salmon: "",
      Sandfish: "",
      SeaCucumber: "",
      Shad: "",
      Squid: "",
      Tilapia: "",
      Woodskip: "",
      Dorado: "",
      Flounder: "",
      LargemouthBass: "",
      Lingcod: "",
      MidnightCarp: "",
      Octopus: "",
      Pike: "",
      ScorpionCarp: "",
      Slimejack: "",
      TigerTrout: "",
      Tuna: "",
      VoidSalmon: "",
      Walleye: "",
      Catfish: "",
      IcePip: "",
      LavaEel: "",
      Putterfish: "",
      Stonefish: "",
      Sturgeon: "",
      SuperCucumber: "",
      Angler: "",
      Crimsonfish: "",
      Glacierfish: "",
      Legend: "",
      MutantCarp: "",
    },
    gathering: {
      Grass: "",
      Wood: "",
      Flax: "",
      Resin: "",
      Mushroom: "",
      Stone: "",
      Iron: "",
      Gold: "",
      Coal: "",
    },
    seed: {
      GreenBeanSeeds: "",
      PotatoSeeds: "",
      StrawberrySeeds: "",
      KaleSeeds: "",
      ParsnipSeeds: "",
      RhubarbSeeds: "",
      CauliflowerSeeds: "",
      GarlicSeeds: "",
      MelonSeeds: "",
      HotPepperSeeds: "",
      RedCabbageSeeds: "",
      CornSeeds: "",
      TomatoSeeds: "",
      WheatSeeds: "",
      RadishSeeds: "",
      HopsSeeds: "",
      BlueberrySeeds: "",
      AmaranthSeeds: "",
      ArtichokeSeeds: "",
      EggplantSeeds: "",
      YamSeeds: "",
      BokChoySeeds: "",
      GrapeSeeds: "",
      CranberrySeeds: "",
      BeetSeeds: "",
      PumpkinSeeds: "",
      SunflowerSeeds: "",
      RiceSeeds: "",
      CoffeeBeanSeeds: "",
    },
    crop: {
      GreenBean: "",
      Potato: "",
      Strawberry: "",
      Kale: "",
      Parsnip: "",
      Rhubarb: "",
      Cauliflower: "",
      Garlic: "",
      Melon: "",
      HotPepper: "",
      RedCabbage: "",
      Corn: "",
      Tomato: "",
      Wheat: "",
      Radish: "",
      Hops: "",
      Blueberry: "",
      Amaranth: "",
      Artichoke: "",
      Eggplant: "",
      Yam: "",
      BokChoy: "",
      Grape: "",
      Cranberry: "",
      Beet: "",
      Pumpkin: "",
      Sunflower: "",
      Rice: "",
      CoffeeBean: "",
    },
    product: {
      Egg: "",
      Milk: "",
    },
  },
  title: {
    ResourcefulCatcher: "",
    Newbie: "",
    Lucky: "",
    DescendantAristocracy: "",
    DescendantOcean: "",
    KeeperGrove: "",
    ReliableWorkaholic: "",
    SereneExcavator: "",
    AgileEarner: "",
    Handyman: "",
    WineSamurai: "",
    StockyFarmer: "",
    SeaPoet: "",
    CulinaryIdol: "",
    Toxic: "",
    KingExcitement: "",
    BelievingInLuck: "",
    FirstSamurai: "",
    Yatagarasu: "",
    HarbingerOfSummer: "",
    Wanderer: "",
  },
};

export const useDictionaryStore = create<DictionaryState>((set) => ({
  dictionary: emptyDictinaory,
  setDictionary: (dictionary: Dictionary) => set({ dictionary }),
}));
