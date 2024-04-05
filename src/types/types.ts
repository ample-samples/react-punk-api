export type Beer = {
  id: number | null;
  name: string | null;
  tagline: string | null;
  first_brewed: string | null;
  description: string | null;
  image_url: string | null;
  abv: number | null;
  ibu: number | null;
  target_fg: number | null;
  target_og: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number | null;
  volume: Volume | null;
  boil_volume: Volume | null;
  method: Method | null;
  ingredients: Ingredients | null;
  food_pairing: string[] | null;
  brewers_tips: string | null;
  contributed_by: string | null;
};

type Ingredients = {
  malt: Malt[] | null;
  hops: Hop[] | null;
  yeast: string | null;
};

type Hop = {
  name: string | null;
  amount: Volume | null;
  add: string | null;
  attribute: string | null;
};

type Malt = {
  name: string | null;
  amount: Volume | null;
};

type Method = {
  mash_temp: MashTemp[] | null;
  fermentation: Fermentation | null;
  twist?: any;
};

type Fermentation = {
  temp: Volume | null;
};

type MashTemp = {
  temp: Volume;
  duration: number | null;
};

type Volume = {
  value: number | null;
  unit: string | null;
};
