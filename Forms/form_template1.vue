<form action="/dataCollectionLocation" method="post" autocomplete="on">
    <div v-for="item in formItems" :key="item.id" class="form-item">
      <label :for="item.id">{{ item.label }}: </label>
      <input
        :type="item.type"
        :id="item.id"
        :name="item.id"
        v-model="item.value"
      />
    </div>
    <button type="submit">Submit</button>
  </form>