// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatasetTaskType, IDataset } from "@responsible-ai/core-ui";

import { fridgeImages } from "./fridgeImages";

export const fridge: IDataset = {
  categorical_features: ["Make", "Software", "Model"],
  class_names: ["can", "carton", "milk_bottle", "water_bottle"],
  feature_metadata: {
    categorical_features: ["Make", "Software", "Model"]
  },
  feature_names: ["mean_pixel_value", "Make", "Software", "Model"],
  features: [
    [95.31284825289677, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [84.69935660795275, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [96.82651920382118, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [139.81288994028156, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [118.74137849634106, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [96.03234639705477, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.1944440258964, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [156.94601031637208, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [138.63600484176374, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.77090019638274, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [104.20986333569394, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.08712864325142, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.7599067809805, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [102.52772110637315, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [79.23872406467069, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [78.73751914857283, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [75.8992330525713, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [107.98595587164303, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [115.18021104866375, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.59847414126499, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [82.81142636149492, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [88.68177055866119, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.34771096076865, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [102.71283720322852, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.43946539695933, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [96.60582819774888, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [95.60207532860207, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [111.82308175247739, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [94.76322168145815, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [89.44031622141526, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [74.21323247999759, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [104.50651779749977, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [105.64691990497285, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [110.85784702236553, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.75961748057519, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [113.76419204323435, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.15102485673101, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [114.39268110155147, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [108.32878689710247, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [106.11869654095158, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [81.28403071807776, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.64177276859483, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [91.13476074956931, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [70.44286869478304, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [81.33078990060321, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [77.63631423247497, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [75.88688354151913, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [108.65089276296955, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [130.8879654044932, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [119.59721447908348, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [152.05574356733518, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.87165709865847, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [110.36740850121295, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [82.79173083008122, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [94.12558349782272, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [110.79903064273911, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [124.7931281108583, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [114.98461584823782, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [104.79512408275197, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [93.91704612231983, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [95.86216844717003, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [99.59804923129467, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [89.33219722653327, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [75.59860171470761, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [104.68140993766983, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [105.644306156172, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.64628605582091, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [105.68025775862502, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [111.10920085785607, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [121.85357080074937, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [102.63033234388577, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [85.63116408255107, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [83.89496285804692, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [124.50242339315221, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [95.28945208713165, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.20876439595983, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [76.99963134288627, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [80.8539143449807, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [89.48208396743361, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [93.05765114188276, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [82.82937102274725, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [102.87860934902386, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [137.36997905585608, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [139.65304142118825, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.45327145519109, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [24.462534090737865, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [82.24885962400992, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [101.50880608334464, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.19573683708269, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.43424392644938, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [101.70703512287733, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [116.01029326824074, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [88.71978644004801, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [84.29723908970824, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [113.93166181988036, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.22723843677329, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.98208949226775, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [84.5715561448712, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [82.80138924465473, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [107.8279084484759, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.26840849619037, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [111.17454558239285, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.09293172811789, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [119.7738092726807, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [107.37994485211024, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [98.976736430254, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [136.69238728082732, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.68018744255428, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [95.20174986564608, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [108.4939201711694, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [113.95875962451218, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [108.08554452262922, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [100.69176448134364, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [113.45939698946766, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.1880322047604, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [92.21307678012667, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [91.18546667269376, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [109.26651699388752, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [76.73858092124098, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [71.06574753517059, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [73.74995102987931, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [81.30849568811809, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [115.89991110039628, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [105.08086348134866, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [118.20760819885385, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [88.28068367311063, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [88.5644421675431, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [124.86965208612715, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [96.44391037714527, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [97.88054103193856, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [85.75104394252163, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [133.50404367632507, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [130.90057006243063, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"],
    [105.48499003018568, "Google", "HDR+ 1.0.220943774z", "Pixel 2 XL"]
  ],
  images: fridgeImages,
  predicted_y: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,
    0, 3, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3
  ],
  target_column: "label",
  task_type: DatasetTaskType.ImageClassification,
  true_y: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3
  ]
};
