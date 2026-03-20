const mergetags_list = [
		{
			value: 'Current.Date',
			title: 'Current date in DD/MM/YYYY format'
		},
		{
			value: 'Campaign.Toc',
			title: 'Linked table of contents in your campaign'
		},
		{
			title: 'Phone',
			menu: [
				{
					value: 'Phone.Home'
				},
				{
					value: 'Phone.work'
				}
			]
		},
		{
			title: 'Person',
			menu: [
				{
					value: 'Person.Name'
				},
				{
					value: 'Person.Name.First'
				},
				{
					value: 'Person.Name.Last'
				},
				{
					value: 'Person.Name.Full'
				},
				{
					title: 'Email',
					menu: [
						{
							value: 'Person.Email.Work'
						},
						{
							value: 'Person.Email.Home'
						}
					]
				}
			]
		}
	];

  export default {
  toolbar: 'mergetags',
    name: 'mergetags',
    config: {
      mergetags_prefix: '${',
      mergetags_suffix: '}',
      mergetags_list,
    }
  };