export class ProductModel {
  id: number;
  title: string;
  picture: string;
  product_url: string;
  description: string;
  pricing: number;
  details: string;
  company: number;
};

export const PRODUCTS_MOCK = [
{ id: 11,
  title: 'Mr. Nice',
  picture: 'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 12,
  title: 'Narco', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 13,
  title: 'Bombasto', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 14,
  title: 'Celeritas', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 15,
  title: 'Magneta', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 16,
  title: 'RubberMan', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 17,
  title: 'Dynama', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 18,
  title: 'Dr IQ', picture:
   'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
   product_url: '',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   pricing: 120,
   details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
   company: 1
  },

{ id: 19,
  title: 'Magma', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

{ id: 20,
  title: 'Tornado', picture:
  'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
  product_url: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pricing: 120,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel nisl massa. Nam non congue leo. Fusce interdum nunc ipsum. Morbi quis finibus arcu, sit amet malesuada sem. Nunc sit amet metus quis neque mattis consequat at fringilla lacus. Vivamus luctus justo id porttitor suscipit. Proin et condimentum urna, nec aliquam nunc. Quisque venenatis libero ac auctor blandit. Praesent malesuada, lorem vel posuere faucibus, leo elit condimentum justo, ac suscipit sem mauris ut purus. Phasellus auctor, purus sed pharetra suscipit, leo lectus scelerisque tortor, ac porta metus felis sed justo. Fusce porta, ipsum sed tincidunt fermentum, turpis ligula molestie sem, non sagittis eros odio sed augue. Proin vel consectetur nisl. Suspendisse potenti.',
  company: 1
},

]
