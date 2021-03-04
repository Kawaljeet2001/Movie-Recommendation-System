def serialize(df):
    title_array=df['Title'].values
    date_array = df['Year'].values
    
    data_object = {}

    for i in range(len(title_array)):
        data_object[str(title_array[i])] = str(date_array[i])
    
    return data_object



