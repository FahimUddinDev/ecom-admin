export async function validate(schema, data) {
  try {
    const validatedData = await schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    return {
      success: true,
      data: validatedData,
    };
  } catch (err) {
    const errors = {};

    if (err.inner) {
      err.inner.forEach((e) => {
        if (!errors[e.path]) {
          errors[e.path] = e.message;
        }
      });
    }

    return {
      success: false,
      errors,
    };
  }
}
