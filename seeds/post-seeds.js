const { Post } = require('../models');

const postData = [
    {
        title: "Fusce aliquam mauris id metus fringilla auctor.",
        post_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tellus est. Suspendisse et semper nibh, ut iaculis ante. In sagittis nunc eu maximus fermentum. Vivamus quis libero et ligula commodo malesuada. Phasellus at viverra est, id congue orci. Phasellus mauris nibh, viverra non nulla vel, venenatis fermentum nisl. Integer et dui at odio consequat volutpat pharetra vitae quam.`,
        user_id: 3
    },
    {
        title: "Donec nec massa et tortor egestas lacinia eget non augue.",
        post_content: `Aliquam erat volutpat. Praesent congue rutrum bibendum. Nullam efficitur leo purus, non ultricies velit condimentum vitae. Vestibulum hendrerit tempor augue ut pretium. Integer dapibus ex eu tortor porta egestas. Integer pellentesque erat luctus elit scelerisque, a porta ante vulputate. Mauris eget congue quam, sed maximus risus. Mauris felis orci, vehicula ut pulvinar non, accumsan at ligula. Sed vehicula vel arcu non aliquet.`,
        user_id: 1
    },
    {
        title: "Nam et eros tincidunt, suscipit augue nec, aliquet ipsum.",
        post_content: `Quisque tincidunt odio eu dignissim tincidunt. Nunc blandit augue non lacus accumsan, ut vehicula odio ultricies. Cras lobortis leo in tellus ullamcorper vestibulum. Cras suscipit laoreet sem sed rutrum. Nam tellus nisl, ornare ut mi eu, efficitur luctus sem. Aenean porttitor volutpat neque, quis auctor elit efficitur id. Aenean quis felis in elit sodales viverra sit amet eu ligula. Sed eleifend sed eros semper lobortis.`,
        user_id: 2

    },
    {
        title: "Duis accumsan nulla id odio varius fermentum.",
        post_content:  `Cras rhoncus arcu in mi egestas, id interdum arcu pharetra. Cras tempor, arcu nec imperdiet pellentesque, odio arcu pulvinar eros, sed pellentesque dui neque quis sem. Pellentesque sed dignissim purus. Etiam rutrum at lorem ac vehicula. Vivamus in libero porta, efficitur ligula sed, vestibulum quam. Sed fermentum leo lobortis, dapibus dui at, tristique ligula. Vivamus odio dolor, pharetra nec risus ac, ultricies dapibus orci.`,
        user_id: 5
    },
    {
        title: "Vivamus efficitur nibh et porttitor sagittis.",
        post_content: `Nullam nec felis imperdiet, bibendum velit quis, consectetur magna. Proin non aliquet neque, in dignissim ipsum. Phasellus id lorem ultricies, faucibus enim quis, mattis diam. Aliquam id metus turpis. Maecenas bibendum convallis urna sit amet blandit. Vivamus scelerisque leo vitae leo consequat fringilla. Fusce maximus mattis ante id iaculis.`,
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;